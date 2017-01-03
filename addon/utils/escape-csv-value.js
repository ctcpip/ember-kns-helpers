export default function(value) {
  if (value == null) { value = ''; }
  return `"${value.toString().replace(/\"/g, '""')}"`;
}
