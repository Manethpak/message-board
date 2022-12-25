export default function filterClass(...className: string[]) {
  return className.filter(Boolean).join(" ");
}
