export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  if (string.endsWith(final))return true
  return false;
}
