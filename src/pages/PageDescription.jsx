import React from 'react';
import { useParams } from 'react-router-dom';
import novels from '../novels.json';
import '../assets/css/page.css'
import Review from '../components/Review';

const PageDescription = () => {
    const { bookId } = useParams();  // Fetch the bookId from the URL params

    // Find the book with the given ID
    const book = novels.find(novel => novel.id === bookId);

    // If the book is not found, show a "not found" message
    if (!book) {
        return <div className="text-center text-white py-20">Book not found</div>;
    }

    return (
        <section>
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 space-y-6 lg:space-y-0 lg:space-x-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/3  rounded-xl">
                    <img
                        src="/images/NovelSyncc.png"
                        alt="Novel Sync"
                        className="w-full h-auto object-cover rounded-lg "
                    />
                </div>

                {/* Book Information Section */}
                <div className="w-full lg:w-2/3 text-[#FFf] space-y-6">
                    <h1 className="text-4xl font-bold text-[#F87871]">{book.bookName}</h1>
                    <p className="text-lg">{book.description}</p>
                    <h2 className="text-xl font-semibold mt-4">{book.author.name}</h2>
                    <p className="text-md text-gray-400">{book.author.description}</p>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6">
                        <button className="btn rounded-full">
                            Read
                        </button>
                        <button className="btn rounded-full">
                            Save
                        </button>
                        <button className="btn rounded-full">
                            Audio Book
                        </button>
                    </div>
                </div>
            </div>
            <Review />
        </section>
    );
};

export default PageDescription;
