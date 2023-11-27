import Link from "next/link";
import Provider from "./Provider";
import Header from "./Header";
import Main from "./Main";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor: "#ffffff"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang="ja">
      <head />
      <body>
          <Provider>
            <Header />
            <Main>{children}</Main>
            
        <header>
          <h1>
            <Link href= "/">ブログ</Link>
          </h1>
          <Link href="/articles/new">記事を書く</Link>
        </header>
        {children}
        <footer>
          <small>© 2023 azukiazusa</small>
        </footer>
        </Provider>
      </body>
    </html>
  );
}