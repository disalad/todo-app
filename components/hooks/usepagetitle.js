export function usePageTitle(pathname) {
    switch (pathname) {
        case '/':
            return 'Todo';
        case '/important':
            return 'Important';
        case '/pending':
            return 'Pending';
        default:
            return '';
    }
}
