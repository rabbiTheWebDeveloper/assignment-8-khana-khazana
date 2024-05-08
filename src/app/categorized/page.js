
import Card from "@/component/ui/Card";



const page = ({searchParams}) => {

  // const { category } = query
  // console.log(searchParams)
  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">Appetizers &amp; Snacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            <Card />
          </div>
        </div>
      </section>
    </main>

  );
};

export default page;