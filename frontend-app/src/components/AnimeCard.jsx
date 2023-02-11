import React from "react";

const AnimeCard = ({ props }) => {
    return (
        <div>
            <div
                key={props.mal_id}
                className="max-w-lg rounded overflow-hidden shadow-lg"
            >
                <img
                    className="w-full"
                    variant="top"
                    height={100}
                    src={props?.images.jpg.large_image_url}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.synopsis}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <div key={props.mal_id[0]}>{props.name}</div>
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <div key={props.mal_id[1]}>{props.name}</div>
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <div key={props.mal_id[2]}>{props.name}</div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;
