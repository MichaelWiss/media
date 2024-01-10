import classNames from 'classnames';

function Skeleton({ times }) {
    const outerClassNames = classNames(
        'relative',
        'overflow',
        'bg-gray-200',
        'rounded',
        'mb-2.5'
    );
    const innerClassNames = classNames();
    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} classNames={outerClassNames}>
           <div classNames={innerClassNames}/>
     </div>;
    });
    return boxes;
}

export default Skeleton;

