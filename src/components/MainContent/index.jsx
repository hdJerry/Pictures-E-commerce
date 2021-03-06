import React, { memo, useMemo } from 'react';
import { Container, Wrapper } from '../GlobalStyles';
import Allproducts from './AllProducts';

const MainContent = ({ data, fetching }) => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const limit = 6;
    // const pageNumber = [...Array(data.length < limit ? 1 : Math.ceil(data.length / limit)).keys()]
    const [filteredData, setFilteredData] = React.useState(data);
    const [pageNumber, setPageNumber] = React.useState([...Array(filteredData.length < limit ? 1 : Math.ceil(filteredData.length / limit)).keys()]);
    const [filters, setFilters] = React.useState([]);

    const FilterProducts = React.useCallback(() => {
        let start = (currentPage) * (limit);
        let end = start + limit
        let result = data.filter((res) => {
            let resp = null
            if (filters.length > 0) {
                resp = filters.includes(res['category']);
            } else {
                resp = res;
            }

            return resp;
        });


        let pagenum = [...Array(result.length < limit ? 1 : Math.ceil(result.length / limit)).keys()];
        setTimeout(() => {
            setPageNumber(pagenum);
            setFilteredData(result);
        }, 300);

        return result.slice(start, end);
            // return data.slice(start, end);
    }, [currentPage, limit, data, filters]);

    const paginateNumber = (num) => {
        setCurrentPage(num)
    };
    return (
        <Wrapper>
            <Container>
                <div className="px-4 lg:p-0">
                    <header className="flex justify-between items-center mb-10 mt-12">
                        <h1 className="text-xl lg:text-2xl font-bold tracking-wide">
                            <span>Photography</span>
                            <span className="mx-4">/</span>
                            <span className="text-text-2 font-normal">Premium Photos</span>
                        </h1>

                        <span>
                            <span className="flex items-center">
                                <span className="lg:hidden">
                                    {/* Filter Icon */}
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.8119 0H5.18805C2.32736 0 0 2.32736 0 5.18805V23.812C0 26.6726 2.32736 29 5.18805 29H23.812C26.6726 29 29 26.6726 29 23.8119V5.18805C29 2.32736 26.6726 0 23.8119 0ZM27.3008 23.8119C27.3008 25.7357 25.7357 27.3008 23.8119 27.3008H5.18805C3.26431 27.3008 1.69922 25.7357 1.69922 23.8119V5.18805C1.69922 3.26431 3.26431 1.69922 5.18805 1.69922H23.812C25.7357 1.69922 27.3008 3.26431 27.3008 5.18805V23.8119Z" fill="black" />
                                        <path d="M24.5103 6.3702H11.5701C11.2143 5.31357 10.2149 4.55017 9.03986 4.55017C7.86479 4.55017 6.86537 5.31357 6.50961 6.3702H4.48975C4.02054 6.3702 3.64014 6.7506 3.64014 7.21981C3.64014 7.68902 4.02054 8.06942 4.48975 8.06942H6.50966C6.86542 9.12605 7.86485 9.88946 9.03991 9.88946C10.215 9.88946 11.2144 9.12605 11.5702 8.06942H24.5103C24.9795 8.06942 25.3599 7.68902 25.3599 7.21981C25.3599 6.7506 24.9795 6.3702 24.5103 6.3702ZM9.03986 8.19024C8.50477 8.19024 8.06943 7.7549 8.06943 7.21981C8.06943 6.68473 8.50477 6.24939 9.03986 6.24939C9.57494 6.24939 10.0103 6.68473 10.0103 7.21981C10.0103 7.7549 9.57494 8.19024 9.03986 8.19024Z" fill="black" />
                                        <path d="M24.5103 13.6504H22.4904C22.1346 12.5938 21.1351 11.8304 19.9601 11.8304C18.7851 11.8304 17.7857 12.5938 17.4299 13.6504H4.48975C4.02054 13.6504 3.64014 14.0308 3.64014 14.5C3.64014 14.9692 4.02054 15.3496 4.48975 15.3496H17.4299C17.7857 16.4063 18.7852 17.1697 19.9602 17.1697C21.1352 17.1697 22.1347 16.4063 22.4904 15.3496H24.5103C24.9795 15.3496 25.3599 14.9692 25.3599 14.5C25.3599 14.0308 24.9795 13.6504 24.5103 13.6504ZM19.9602 15.4704C19.4251 15.4704 18.9897 15.0351 18.9897 14.5C18.9897 13.9649 19.4251 13.5296 19.9602 13.5296C20.4953 13.5296 20.9306 13.9649 20.9306 14.5C20.9306 15.0351 20.4953 15.4704 19.9602 15.4704Z" fill="black" />
                                        <path d="M24.5103 20.9306H15.2102C14.8545 19.8739 13.855 19.1105 12.68 19.1105C11.5049 19.1105 10.5055 19.8739 10.1497 20.9306H4.48975C4.02054 20.9306 3.64014 21.311 3.64014 21.7802C3.64014 22.2494 4.02054 22.6298 4.48975 22.6298H10.1497C10.5055 23.6864 11.5049 24.4498 12.68 24.4498C13.855 24.4498 14.8545 23.6864 15.2102 22.6298H24.5103C24.9795 22.6298 25.3599 22.2494 25.3599 21.7802C25.3599 21.311 24.9795 20.9306 24.5103 20.9306ZM12.68 22.7507C12.1449 22.7507 11.7096 22.3153 11.7096 21.7802C11.7096 21.2452 12.1449 20.8098 12.68 20.8098C13.2151 20.8098 13.6504 21.2451 13.6504 21.7802C13.6504 22.3153 13.2151 22.7507 12.68 22.7507Z" fill="black" />
                                    </svg>
                                </span>

                                <button className="hidden lg:flex items-center mr-4">
                                    {/* sort asc and dsc */}
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" fill="black" />
                                            <path d="M11.4592 14.6367C11.5328 14.7103 11.6279 14.7471 11.726 14.7471C11.8241 14.7471 11.9191 14.7103 11.9927 14.6367L14.8897 11.7397C15.0368 11.5926 15.0368 11.3565 14.8897 11.2094C14.7425 11.0622 14.5065 11.0622 14.3593 11.2094L12.103 13.4657V0.626917C12.103 0.418456 11.9344 0.249847 11.726 0.249847C11.5175 0.249847 11.3489 0.418456 11.3489 0.626917V13.4657L9.09567 11.2094C8.94852 11.0622 8.71247 11.0622 8.56532 11.2094C8.41817 11.3565 8.41817 11.5926 8.56532 11.7397L11.4592 14.6367Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span className="text-text-2 font-normal ml-2 text-xl">Sort By</span>
                                </button>
                                   
                                <button className="hidden lg:flex items-center">
                                    {/* Sort dropdown */}
                                    <span className="mr-2 text-xl">Price</span>
                                    <span>
                                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10 10L18 2" stroke="black" stroke-width="3" />
                                        </svg>
                                    </span>
                                </button>
                            </span>
                        </span>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-5">
                        <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-border h-40"></div>
                        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                            <Allproducts FilterProducts={FilterProducts()}  />

                            {
                                !fetching && pageNumber.length > 1 && (
                                <div className="flex justify-center items-center my-4 p-3">
                                    {/* Pagination */}
                                    <button onClick={() => {
                                        setCurrentPage(prevState => prevState - 1);
                                        }} className="flex justify-center items-center mr-2" disabled={currentPage === 0}>
                                        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 2L3 10L11 18" stroke="black" stroke-width="3" />
                                        </svg>
                                    </button>

                                        {
                                            pageNumber && pageNumber.map((res, index) => (
                                                <button onClick={() => {
                                                    paginateNumber(res)
                                                }} key={index} className={'mx-2 text-lg ' + (currentPage === res ? ' text-black' : ' text-border')}>{res + 1}</button>
                                            ))
                                        }

                                    <button onClick={() => {
                                        setCurrentPage(prevState => prevState + 1);
                                        }} className="flex justify-center items-center ml-2" disabled={currentPage >= Math.ceil(filteredData.length/limit) - 1}>
                                        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10 10L2 18" stroke="black" stroke-width="3" />
                                        </svg>
                                    </button>
                                </div>

                                )
                            }
                        </div>
                        
                    </div>

                </div>
            </Container>
        </Wrapper>
    );
}

export default memo(MainContent);
