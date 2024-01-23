import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";


export default function Home({searchParams} : any) {

  const page = parseInt(searchParams.page) || 1;


  return (
      <div className="min-h-[100vh] mx-auto ml-20 mr-20">
        <Hero />
        <CategoryList />
        <div className="content flex gap-[50px]">
          <CardList page={page} />
          <Menu />
        </div>
      </div>
  )
}
