export const resolveAssetPath = (path) => {
    if (!path) {
        return path;
    }

    if (/^(https?:|data:|blob:)/i.test(path)) {
        return path;
    }

    const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${base}${normalizedPath}`;
};
