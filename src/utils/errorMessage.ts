function getErrorMessage(errorCode?: string): string {
    switch (errorCode) {
        case '404':
            return 'Game or endpoint not found.';
        case '500':
            return 'Something wrong on the API.';
        default:
            return 'An error occurred. Please try again after 4 seconds.';
    }
};

export { getErrorMessage };