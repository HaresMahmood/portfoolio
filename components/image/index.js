import NextImage from 'next/image';
import classNames from 'classnames';

const Image = ({ className, height, src, ...rest }) => {
    return (
        <div
            className={classNames('_image-container', className)}
            style={height ? { height } : null}
        >
            <NextImage className="_image" layout="fill" src={src} {...rest} />
        </div>
    );
};

export default Image;
