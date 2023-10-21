import './App.css';
import {
    Routes,
    Route,
    Link,
    useParams,
    Outlet,
} from 'react-router-dom';
import { NavLink } from './NavLink';

function Home() {
    return <div>Home</div>;
}

function SearchPage() {
    const tacos = ['cochinita', 'chili', 'carnita', 'quesadilla'];

    return (
        <div>
            <h1>Search page</h1>
            <ul>
                {tacos.map((taco) => (
                    <li key={taco}>
                        <Link to={`/tacos/${taco}`}>{taco}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Tacos() {
    const { taco } = useParams();

    return (
        <div>
            <h1>{taco}</h1>
            <Link to={`details`}>Mostar detalle </Link>
            <Outlet />
        </div>
    );
}
function TacoDetails() {
    const { taco } = useParams();

    return (
        <div>
            <h1>Taco details {taco}</h1>
        </div>
    );
}

function TacoIndex() {
    return <h1>Index Route taco</h1>;
}



function App() {
    return (
        <div className="app">
            <header>
                <h1>MaicolDev 😊</h1>
                <nav>
                    <ul>
                        <li>
                            {/* con el metodo Link se aplica SPA */}
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search-page">Search Page</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/search-page"
                    element={<SearchPage />}
                />
                <Route
                    path="/tacos/:taco"
                    element={<Tacos />}
                >
                    <Route
                        index
                        element={<TacoIndex />}
                    />
                    <Route
                        path="details"
                        element={<TacoDetails />}
                    />
                </Route>

                <Route
                    path="/tacos/maicoldev"
                    element={<h1 style={{ color: 'red' }}>MaicolDev</h1>}
                />

                <Route
                    path="*"
                    element={<h1>Not Found 404</h1>}
                />
            </Routes>
        </div>
    );
}

export default App;
