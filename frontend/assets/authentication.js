// Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
async function loginHashPassword(passwordEntry) {
  const pweAsUni8 = new TextEncoder().encode(passwordEntry); // Encode password entry as Uint8Array
  const pweHashed = await crypto.subtle.digest('SHA-256', pweAsUni8); // Hash that array thingy
  const pweByteArray = Array.from(new Uint8Array(pweHashed)); // Apparently this needs to be converted again
  const pweFinalHex = pweByteArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // Convert again to hex
  return pweFinalHex;
}

digestMessage(text)
  .then((digestHex) => console.log(digestHex));
