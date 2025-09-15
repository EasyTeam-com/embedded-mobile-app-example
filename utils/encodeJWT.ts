import { User } from "@/configs/users";
import { Location, Organization } from "@easyteam/core-ui";
import forge from "node-forge";

function removeB64Padding(base64: string) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]+$/, "");
}

function encodeB64(value: string) {
  const encodedB64 = forge.util.encode64(value);
  return removeB64Padding(encodedB64);
}

function jwtSign(payload: any, privateKey: string) {
  const desirializedKey = privateKey.replace(/\\n/g, "\n");
  const key = forge.pki.privateKeyFromPem(desirializedKey);
  const md = forge.md.sha256.create();
  const header = {
    alg: "RS256",
    typ: "JWT",
  };
  const strHeader = JSON.stringify(header);
  const strPayload = JSON.stringify(payload);
  const header64 = encodeB64(strHeader);
  const payload64 = encodeB64(strPayload);
  const preHash = header64 + "." + payload64;
  md.update(preHash, "utf8");
  const signature = key.sign(md);
  const signature64 = encodeB64(signature);

  return header64 + "." + payload64 + "." + signature64;
}

export function encodeJWT(
  user: User,
  location: Location,
  organization: Organization,
  partnerId: string,
  privateKey: string
) {
  if (!user) {
    throw new Error("Unable to find user data. Please select a user.");
  }
  if (!location) {
    throw new Error("Unable to find location data. Please select a location.");
  }

  const payload = {
    locationId: location.id,
    employeeId: user.id,
    organizationId: organization.id,
    partnerId: partnerId,
    accessRole: {
      name: user.role,
      permissions: user.permissions,
    },
    role: {
      name: user.role,
    },
    features: user.features,
  };

  if (!privateKey) {
    console.error("Env not set. Please add the JWT_PRIVATE_KEY variable.");
    throw new Error("Env not set. Please add the JWT_PRIVATE_KEY variable.");
  }
  const token = jwtSign(payload, privateKey);
  return token;
}
