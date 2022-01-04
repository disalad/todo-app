export function usePageTitle(pathname) {
    switch (pathname) {
        case '/':
            return 'Todo';
        default:
            return '';
    }
}
