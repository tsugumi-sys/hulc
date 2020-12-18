/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { useRouter } from "next/router"
import NextLink from "next/link"

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
    const { as, href, ...other } = props;

    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...other} />
        </NextLink>
    );
});

NextComposed.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool
};

function Link(props) {
    const {
        href,
        activeClassName = "active",
        className: classNameProps,
        innerRef,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    return (
        <NextComposed
              className={className}
              ref={innerRef}
              href={href}
              {...other}
        />
    )
}

Link.propTypes = {
    activeClassName: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    naked: PropTypes.bool,
    onClick: PropTypes.func,
    prefetch: PropTypes.bool
};

export default React.forwardRef((props, ref) => (
    <Link {...props} innerRef={ref} />
))