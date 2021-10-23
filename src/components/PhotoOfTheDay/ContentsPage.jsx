import React from 'react';
import Peoplealsoimg from './PeopleAlsoImg';

const Contentspage = ({ photoOfTheDay, peopleAlso }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-24 my-4">
            <div className="col-span-12 lg:col-span-7">
                <header className="py-3 text-2xl lg:text-xl font-bold text-black">
                    About the {photoOfTheDay.name}
                </header>
                <h3 className="text-text font-bold text-xl lg:text-lg">
                    Pets
                </h3>

                <p className="text-base text-text leading-6 my-2 pr-4 lg:pr-14">
                    {photoOfTheDay.details.description}
                </p>

                <p className="text-base text-text leading-6 mt-6 pr-4 lg:pr-14">
                    text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                </p>

            </div>

            <div className="col-span-12 lg:col-span-5 lg:pl-12">
                <header className="py-3 text-xl font-bold text-black flex justify-start lg:justify-end items-center mb-3">
                    People also buy
                </header>

                <div className="grid grid-cols-3 gap-8">
                    {
                        peopleAlso.map((res, index) => (
                            <Peoplealsoimg image={res} key={index} />
                        ))
                    }

                </div>

                <div className="flex justify-start lg:justify-end mt-5">
                    <div className="lg:text-right">
                        <h4 className="text-lg font-bold">Details</h4>
                        <p className="text-base text-text leading-6 my-2">Size: 1020 x 1020 pixel</p>
                        <p className="text-base text-text leading-6 my-2">Size: 15 mb</p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Contentspage;
