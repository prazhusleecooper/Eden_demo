interface iconOptions {
    color: string;
    width: string;
    height: string;
}


const selfIcon = ({ color, width, height }: iconOptions) => {

    return(
        <svg
            stroke="black"
            fill={ color }
            strokeWidth={0}
            viewBox="0 0 24 24"
            width={ width }
            height={ height }
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
            </g>
        </svg>
    );

};

const teamIcon = ({ color, width, height }: iconOptions) => {

    return(
        <svg
            stroke="black"
            fill={ color }
            strokeWidth={0}
            viewBox="0 0 24 24"
            width={ width }
            height={ height }
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            </g>
        </svg>
    );

};

const checkIcon = ({ color, width, height }: iconOptions) => {

    return(
        <svg
            stroke="black"
            fill={ color }
            strokeWidth={0}
            viewBox="0 0 24 24"
            width={ width }
            height={ height }
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </g>
        </svg>
    );

};

export { selfIcon, teamIcon, checkIcon };