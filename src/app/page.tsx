import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";


export default function Home() {
  return (
      <div className="min-h-[100vh] mx-auto">
        <Hero />
        <CategoryList />
        <div className="content flex gap-[50px]">
          <CardList />
          <Menu />
        </div>
      </div>
  )
}
