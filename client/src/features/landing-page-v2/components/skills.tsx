import { useState } from 'react';

type SkillItem = {
    id: string;
    icon: string;
    title: string;
    description: string;
    hasLine?: boolean;
};

type Achievement = {
    value: string;
    label: string;
};

export function Skills() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const skills: SkillItem[] = [
        {
            id: '1',
            icon: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550b1eff7681300db93_ico_skills-leadership.svg',
            title: 'Digital Fluency',
            description: 'Navigate tools, apps, and devices with ease',
            hasLine: true
        },
        {
            id: '2',
            icon: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5500e03d92bc1747cb2_ico_skills-responsibility.svg',
            title: 'Self-Reliance',
            description: 'Build confidence, focus, and learning discipline'
        },
        {
            id: '3',
            icon: 'https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5506ec5691cba88bb5b_ico_skills-flexibility.svg',
            title: 'Collaboration',
            description: 'Communicate and work effectively in remote teams'
        }
    ];

    const achievements: Achievement[] = [
        { value: '50+', label: 'hours of\nmicrolearning' },
        { value: '15+', label: 'paths' }
    ];

    const toggleVideoPlayback = () => {
        setIsVideoPlaying(!isVideoPlaying);
    };

    return (
        <section id="skills" className="section section--overflow-hidden">
            <div className="content">
                <div className="skills__top">
                    <h2>
                        
                        Get the skills you <br />
                        need for a job that <br />
                        is in demand<span className="dot-green">.</span>
                    </h2>

                    <div className="skills__head-desc">
                        <p className="skills__txt-desc">
                            The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </p>

                        <AchievementsList achievements={achievements} className="mod--desctop" />
                    </div>
                </div>

                <div className="skills__columns">
                    {/* Skills List Column */}
                    <div className="skills__col">
                        <SkillsList skills={skills} />
                    </div>

                    {/* Video Column */}
                    <div className="skills__col mod--video">
                        <AchievementsList achievements={achievements} className="mob--mob" />

                        <div className="skills__video-wrap">
                            <div className="skills__video w-embed w-iframe">
                                <iframe
                                    id="vimeo-player"
                                    className="skills__video"
                                    src={`https://player.vimeo.com/video/641585003?h=a359e6a27b&background=1&autoplay=${isVideoPlaying ? 1 : 0}&loop=1&byline=0&title=0&quality=480p`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <VideoControls
                                isPlaying={isVideoPlaying}
                                onToggle={toggleVideoPlayback}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Extracted Skills List Component
function SkillsList({ skills }: { skills: SkillItem[] }) {
    return (
        <ul role="list" className="skills__list">
            {skills.map((skill, index) => (
                <SkillItem
                    key={skill.id}
                    skill={skill}
                    isLast={index === skills.length - 1}
                />
            ))}
        </ul>
    );
}

// Extracted Skill Item Component
function SkillItem({ skill, isLast }: { skill: SkillItem, isLast: boolean }) {
    return (
        <li className="skills__list-item">
            <div className="skills__list-ico">
                <img
                    src={skill.icon}
                    loading="lazy"
                    alt={skill.title}
                    aria-hidden="true"
                />
                {skill.hasLine && <div className="skills__list-line"></div>}
            </div>

            <div>
                <div className="skills__list-title stroke--06">{skill.title}</div>
                <div className="skills__list-desc">{skill.description}</div>
            </div>

            {!isLast && <div className="skills__list-line"></div>}
        </li>
    );
}

// Extracted Achievements Component
function AchievementsList({
    achievements,
    className
}: {
    achievements: Achievement[];
    className?: string;
}) {
    return (
        <div className={`skills__achieve ${className || ''}`}>
            {achievements.map((achievement, index) => (
                <div key={index} className="skills__achieve-txt-wrap">
                    <div className="skills__achieve-title stroke--08">
                        {achievement.value}
                    </div>
                    <div className="skills__achieve-desc stroke--06">
                        {achievement.label.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < achievement.label.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </div>
                    {index < achievements.length - 1 && (
                        <div className="skills__achieve-line"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

// Extracted Video Controls Component
function VideoControls({
    isPlaying,
    onToggle
}: {
    isPlaying: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="skills__video-nav">
            <button
                onClick={onToggle}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="skills__video-nav-button"
            >
                <img
                    src={
                        isPlaying
                            ? 'https://assets.website-files.com/617fa48948c7ab24b715140e/61a0fdc7a0d9b80891c0b859_ico_pause.svg'
                            : 'https://assets.website-files.com/617fa48948c7ab24b715140e/61a0fdc7d2986a2157b32bba_ico_play.svg'
                    }
                    loading="lazy"
                    alt=""
                    className="skills__video-nav-ico"
                />
            </button>
        </div>
    );
}