import "@/app/styles/globals.css"
import "@/app/styles/app.css"
export const metadata = {
    title: '中文 MBTI 人格测验',
    keywords:'性格测试, 中文MBTI性格测试, 人格分析, 16型人格',
    description: 'MBTI性格测试，更好了解自己',
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <navigation className="navigation">
                    <img className="logo" src="/next.svg" />
                </navigation>
                <div className="wrapper">
                    <section className="main">{children}</section>
                </div>
            </body>
        </html>
    );
}
