import { existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const publicRoot = resolve('public');

/** Resolve local public assets at build time without emitting missing URLs. */
export function publicAssetExists(path: string | undefined): boolean {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return false;
  const resolved = resolve(publicRoot, path.slice(1));
  return resolved.startsWith(publicRoot + sep) && existsSync(resolved);
}
