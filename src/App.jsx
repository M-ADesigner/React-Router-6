import './App.css';
import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
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

function App() {
    return (
        <div className="app">
            <header>
                <h1>MaicolDev 😊</h1>
                <nav>
                    <ul>
                        <li>
                            {/* con el metodo Link se aplica SPA */}
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search-page">Search Page</Link>
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
                        path="details"
                        element={<TacoDetails />}
                    />
                </Route>
                <Route path='*' element={<h1>Not found</h1>}  />
            </Routes>
        </div>
    );
}

export default App;
