import { Link } from "@inertiajs/react";

export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                preserveScroll
                href={link.url || ""}
                key={link.label}
                className={
                    "inline-block py-2 px-3 border-round rounded-lg text-gray-500 text-md " +
                    (link.active ? "bg-blue-100 text-gray-600 " : "") + 
                    (!link.url ? "!text-gray-300 cursor-not-allowed " : "hover:bg-gray-950")
                }
                dangerouslySetInnerHTML={{__html: link.label}}></Link>
            ))}
        </nav>
    )
}