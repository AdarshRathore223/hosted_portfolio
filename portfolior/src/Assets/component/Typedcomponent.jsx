import { TypeAnimation } from 'react-type-animation';

const Typedcomponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'UI Designer',
                1000,
                'Freelancer',
                1000,
                'Graphic Designer',
                1000,
                'Senior at Amity University',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
export default Typedcomponent