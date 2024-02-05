function ErrorMessage({ message }): JSX.Element {
    return (
        <p className="error">
            <span>⛔️</span> {message}
        </p>
    );
}

export default ErrorMessage;