import { FC } from "react";

const EmailIcon: FC<{
    className: string,
}> = props => (
    <svg width="23" height="16" viewBox="0 0 23 16" fill="none" className={props.className} xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_204_22)">
            <rect width="22.9763" height="16" fill="white"/>
            <path d="M0.710529 0L11.6826 8.94706L22.1853 0H0.710529ZM0 15.0557L7.81582 7.21935L0 0.847026V15.0576V15.0557ZM8.67781 7.9224L0.618909 16H22.2901L14.5846 7.9224L12.0491 10.0858C11.9502 10.1682 11.826 10.2141 11.6973 10.2158C11.5687 10.2175 11.4433 10.1749 11.3423 10.0951L8.67781 7.9224ZM15.4316 7.20439L22.9763 15.1193V0.777843L15.4316 7.20439Z" fill="#0883C5"/>
        </g>
        <defs>
            <clipPath id="clip0_204_22">
                <rect width="22.9763" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export default EmailIcon