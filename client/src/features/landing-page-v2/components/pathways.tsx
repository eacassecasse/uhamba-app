import { useState } from 'react';

type Programme = {
    id: string;
    title: string;
    duration: string;
    imageUrl: string;
    mobileImageUrl?: string;
    altText?: string;
};

type Category = {
    id: string;
    name: string;
};

export function Pathways() {
    const [activeTab, setActiveTab] = useState('all');

    const industries: Category[] = [
        { id: 'all', name: 'All industries' },
        { id: 'digital-skills', name: 'Digital Skills' },
        { id: 'small-business', name: 'Small Business' },
        { id: 'green-economy', name: 'Green Economy' },
        { id: 'health-community', name: 'Health & Community' },
        { id: 'civic-admin', name: 'Civic & Admin Services' },
    ];

    const programmes: Programme[] = [
        {
            id: '1',
            title: 'Start Your Business',
            duration: '4 month',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5505ecb8e2f5f217405_categories_01.webp',
        },
        {
            id: '2',
            title: 'Make Data Work for You',
            duration: '3 month',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a239182daefe2e21_categories_02.webp',
        },
        {
            id: '3',
            title: 'Grow Your Side Hustle',
            duration: '2 month',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550c4055a4a51c6d4ff_categories_03.webp',
            mobileImageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/61897770d15150edb1e1a1de_categories_03-mob.webp',
        },
        {
            id: '4',
            title: 'Care Work With Confidence',
            duration: '4 month',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a23918491cfe2e20_categories_04.webp',
        },
    ];

    const filteredProgrammes = activeTab === 'all'
        ? programmes
        : programmes.filter(programme => programme.id === activeTab);

    return (
        <section className="section">
            <div className="content">
                <h2 className="heading--center">Learning Tracks</h2>
                {/* <p className="text-xl text-center border border-red-500 mb-8">
                    Each pathway is co-created with industry mentors and tailored to your pace and goals.
                </p> */}

                {/* Tab Navigation */}
                <div className="category__tabs-tabs">
                    <div
                        className="category__tabs-menu w-tab-menu"
                        role="tablist"
                        aria-label="Program categories"
                    >
                        {industries.map(industry => (
                            <button
                                key={industry.id}
                                onClick={() => setActiveTab(industry.id)}
                                className={`category__tab-link w-inline-block w-tab-link ${activeTab === industry.id ? 'w--current' : ''}`}
                                role="tab"
                                aria-selected={activeTab === industry.id}
                                aria-controls={`tab-${industry.id}`}
                                id={`tab-${industry.id}-button`}
                                tabIndex={activeTab === industry.id ? 0 : -1}
                            >
                                <div>{industry.name}</div>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="category__tabs-mask w-tab-content">
                        <div
                            className="category__tab w-tab-pane w--tab-active"
                            role="tabpanel"
                            aria-labelledby={`tab-${activeTab}-button`}
                            id={`tab-${activeTab}`}
                        >
                            <div className="category__columns">
                                {filteredProgrammes.map(programme => (
                                    <div
                                        key={programme.id}
                                        className="category__col"
                                    >
                                        <a
                                            href="#"
                                            className="category__card w-inline-block"
                                            data-remodal-target="form"
                                            aria-label={`Learn more about ${programme.title} programme`}
                                        >
                                            <picture>
                                                <source
                                                    srcSet={programme.mobileImageUrl}
                                                    media="(max-width: 767px)"
                                                />
                                                <img
                                                    loading="lazy"
                                                    width={296}
                                                    src={programme.imageUrl}
                                                    alt={programme.altText || programme.title}
                                                    className="category__card-img"
                                                />
                                            </picture>

                                            <div className="category__card-arrow">
                                                <img
                                                    loading="lazy"
                                                    src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fd6c0253104adb423d57d_ico_arrow-link.svg"
                                                    alt=""
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div className="category__card-title stroke--skills-06">
                                                {programme.title}
                                            </div>

                                            <div className="category__card-month">
                                                {programme.duration}
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}