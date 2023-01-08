/** @jsx h */

import { h } from "blog";

export default function Header(props: { author?: string }) {
    return (
        <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
            <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
                <span>
                &copy; {new Date().getFullYear()} {props.author} 
                </span>
            </p>
        </footer>
    );
}