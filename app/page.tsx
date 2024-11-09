
import CategoriesList from "@/components/home/CategoriesList";
import TopicsContainer from "@/components/home/TopicsContainer";
export default function Home({ searchParams }: { searchParams: { category?: string, search?: string } }) {
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <TopicsContainer />
    </section>
  );
}
