import Header from "../components/nav/header";
import Footer from "../components/footer/footer";

const Container = ({ children, categories }) => {
    return(
        <div>
            <Header categories={categories} />
            <div className="sm:p-2 p-0 lg:py-10 lg:px-20 md:p-4">
            {children}
            </div>
            <Footer />
        </div>
    )
};

export default Container;