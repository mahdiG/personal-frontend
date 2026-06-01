export function getRandomID(): string {
  const ID_LENGTH = 10;
  const CHARSET = "abcdefghijklmnopqrstuvwxyz";
  const CHARSET_SIZE = CHARSET.length;

  // Collect enough random bytes from the secure context’s CSPRNG
  const randomBytes = new Uint8Array(ID_LENGTH);
  crypto.getRandomValues(randomBytes);

  let id = "";

  for (const byte of randomBytes) {
    // Rejection sampling to avoid modulo bias:
    // 26 does not evenly divide 256, so raw `byte % 26` would favour the
    // first few letters. Only accept bytes in the range [0, 251] (252 is the
    // largest multiple of 26 ≤ 255), and draw a new byte when needed.
    let unbiasedByte = byte;
    const MAX_UNBIASED = 256 - (256 % CHARSET_SIZE); // 252

    while (unbiasedByte >= MAX_UNBIASED) {
      const [freshByte] = crypto.getRandomValues(new Uint8Array(1));
      unbiasedByte = freshByte;
    }

    const index = unbiasedByte % CHARSET_SIZE;
    id += CHARSET[index];
  }

  return id;
}
