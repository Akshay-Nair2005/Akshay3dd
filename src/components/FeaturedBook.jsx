import React from 'react';
import novels from '../novels.json';
import BookListing  from './BookListing';


const FeaturedBook = ({isHome = false}) => {
    const FeaturedBooks = isHome ? novels.slice(0, 3) : novels;
    console.log(FeaturedBooks)
    return (
        <section className="px-4 py-10 h-[100vh]">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-6 ">
            {isHome ? "Featured Books" : "All Books"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FeaturedBooks.map((novel) => (
              <BookListing novel={novel} key={novel.id} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default FeaturedBook;
