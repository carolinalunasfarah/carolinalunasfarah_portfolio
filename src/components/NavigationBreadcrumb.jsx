import { Link } from "react-router-dom";

// react-bootstrap
import Breadcrumb from "react-bootstrap/Breadcrumb";

const NavigationBreadcrumb = ({ paths }) => {
    return (
        <Breadcrumb className="navigation-breadcrumb">
            {paths.map((path, index) => (
                <Breadcrumb.Item
                    key={index}
                    linkAs={Link}
                    linkProps={{ to: path.to }}
                    className={path.active ? "breadcrumb-active" : "breadcrumb-inactive"}>
                    <span>{path.text}</span>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default NavigationBreadcrumb;
