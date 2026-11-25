export default function handler(req, res) {
  const host = (req.headers.host || '').split(':')[0];
  const suffix = '.only.fozowo.com';

  if (host.endsWith(suffix)) {
    const sub = host.slice(0, -suffix.length);
    if (sub && sub !== 'www') {
      const target = `https://only.fozowo.com/profile?u=${encodeURIComponent(sub)}`;
      res.writeHead(307, { Location: target });
      res.end();
      return;
    }
  }

  res.writeHead(307, { Location: 'https://only.fozowo.com' });
  res.end();
}
