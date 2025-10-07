import { Link } from "react-router-dom";

// react-bootstrap
import Breadcrumb from "react-bootstrap/Breadcrumb";

// schemas
import { pathsSchema } from "./schemas";

const NavigationBreadcrumb = ({ paths }) => {
    return (
        <Breadcrumb className="navigation_breadcrumb">
            {paths.map((path, index) => (
                <Breadcrumb.Item
                    key={index}
                    linkAs={Link}
                    linkProps={{ to: path.to }}
                    className={path.active ? "breadcrumb_active" : "breadcrumb_inactive"}>
                    <span>{path.text}</span>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

NavigationBreadcrumb.propTypes = pathsSchema;

export { NavigationBreadcrumb };
