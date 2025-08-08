import { useState } from 'react';

type HeroPerson = {
    id: string;
    imageUrl: string;
    altText: string;
    srcSet?: string;
    sizes?: string;
    title: string;
    topicsCount: number;
    initialWidth?: string;
};

export function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    // Data separated for easier maintenance
    const heroPersons: HeroPerson[] = [
        {
            id: '1',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.webp',
            altText: 'Cooking course participant',
            srcSet: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-500.webp 500w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-800.webp 800w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.webp 980w',
            sizes: '(max-width: 991px) 100vw, 9vw',
            title: 'Writing Course',
            topicsCount: 100,
            initialWidth: '100%'
        },
        {
            id: '2',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2.webp',
            altText: 'Writing course participant',
            srcSet: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2-p-500.webp 500w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2-p-800.webp 800w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2.webp 980w',
            sizes: '(max-width: 991px) 100vw, 9vw',
            title: 'Writing Course',
            topicsCount: 100
        },
        {
            id: '3',
            imageUrl: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp',
            altText: 'Business course participant',
            srcSet: 'https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3-p-500.webp 500w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3-p-800.webp 800w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp 980w',
            sizes: '(max-width: 991px) 100vw, 9vw',
            title: 'Business Course',
            topicsCount: 100
        }
    ];

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <section className="section section--hero">
            <div className="content">
                <div className="hero__columns">
                    {/* Left Column - Text Content */}
                    <div className="hero__col col--1 gap-4 justify-center">
                        <h1 className="md:text-7xl hero__h1 mt-4">
                            Unlock
                            <br />
                            pathways
                            <span className="dot">.</span>
                            <br />
                            Reimagine
                            <br />
                            futures
                            <span className="dot">.</span>
                        </h1>
                        <h3>
                            We&apos;re building learner-first pathways <br /> that unlock skills, confidence, and purpose—<br />for those left behind by traditional <br />education systems.
                        </h3>
                        <div className="form-block mod--hero">
                            <form
                                onSubmit={handleSearchSubmit}
                                className="form"
                                aria-label="Find pathways"
                            >
                                <input
                                    type="text"
                                    className="input mod--hero"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Explore pathways"
                                    aria-label="Search for pathways"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn-submit mod--hero stroke--btn-1"
                                    aria-label="Submit search"
                                >
                                    Go
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Persons Gallery */}
                    <div className="hero__col col--2">
                        <div className="hero__persons">
                            {heroPersons.map((person) => (
                                <HeroPersonCard
                                    key={person.id}
                                    person={person}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Extracted as a separate component for reusability
function HeroPersonCard({ person }: { person: HeroPerson }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className={`hero__person group ${person.initialWidth ? person.initialWidth : ''}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <div className="hero__person-cont">
                <img
                    src={person.imageUrl}
                    alt={person.altText}
                    className="hero__person-img"
                    srcSet={person.srcSet}
                    sizes={person.sizes}
                    loading="eager"
                    style={{ height: person.id === '1' ? '115%' : '100%', width: '100%' }}
                />
                <div className="hero__person-grad">
                    {showDetails ? (
                        <div className="hero__person-txt-more">
                            <div className="hero__person-title stroke--white-02">{person.title}</div>
                            <div className="hero__person-count">
                                <span className="hero__person-count-title stroke--white-02">{person.topicsCount}</span>
                                <span className="hero__person-count-span">TOPICS</span>
                            </div>
                        </div>
                    ) : (
                        <div className="hero__person-txt-less">
                            <div className="hero__person-title stroke--white-02">
                                {person.title.split(' ')[0]}
                            </div>
                            <div className="hero__person-square"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}