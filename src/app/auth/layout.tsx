export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center p-24">
            {children}
        </section>
    );
}