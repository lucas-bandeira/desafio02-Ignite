import {Button} from "./Button";
import {Dispatch, SetStateAction} from "react";
import '../styles/sidebar.scss';
import '../styles/content.scss';
import {GenreResponseProps} from "../App";

interface ISideBarProps {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    setSelectedGenreId: Dispatch<SetStateAction<number>>
}

export function SideBar(props: ISideBarProps) {

    const {genres, setSelectedGenreId, selectedGenreId} = props;

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <>
            <nav className="sidebar">
                <span>Watch<p>Me</p></span>

                <div className="buttons-container">
                    {genres.map(genre => (
                        <Button
                            key={String(genre.id)}
                            title={genre.title}
                            iconName={genre.name}
                            onClick={() => handleClickButton(genre.id)}
                            selected={selectedGenreId === genre.id}
                        />
                    ))}
                </div>

            </nav>
        </>
    );
}