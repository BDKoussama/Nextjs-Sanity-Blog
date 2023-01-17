import { geoCentroid } from "d3-geo";
import ReactTooltip from "react-tooltip";
import { memo, useEffect, useState} from "react";
import Link from 'next/link';

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation
  } from "react-simple-maps";

import allStates from "../lib/allstate.json";
import geoUrl from '../lib/states-10m.json';

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};



const UsMap = ()  => {

    const [content , setContent] = useState('');
    const [isMounted , setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    return (
            <>
                <ComposableMap projection="geoAlbersUsa" data-tip = "">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => (
                        <>
                            {geographies.map(geo => {
                                const cur = allStates.find(s => s.val === geo.id);
                                return cur.url !== '' ? (
                                    <Link key={geo.rsmKey} href="/blog/post/[slug]"  as={`/blog/post/${cur.url}`} >
                                        <a className="cursor-pointer">
                                            <Geography
                                                    key={geo.rsmKey}
                                                    stroke="#FFF"
                                                    strokeWidth={1}
                                                    geography={geo}
                                                    style = {{
                                                        default : {
                                                            fill: "#2bafa0" 
                                                        } ,
                                                        hover : {
                                                            fill: "#c1f0e6"
                                                        } , 
                                                        pressed : {
                                                            fill : "#15b8a6"
                                                        }
                                                    }}
                                                    onMouseEnter = {() => { setContent(`${geo.properties.name}`) }}
                                                    onMouseLeave = {() => { setContent('') }}
                                                />
                                            </a>
                                    </Link>
                                ) : (
                                    <Geography
                                                key={geo.rsmKey}
                                                stroke="#FFF"
                                                strokeWidth={1}
                                                geography={geo}
                                                style = {{
                                                    default : {
                                                        fill: "#2bafa0" 
                                                    } ,
                                                    hover : {
                                                        fill: "#c1f0e6"
                                                    } , 
                                                    pressed : {
                                                        fill : "#15b8a6"
                                                    }
                                                }}
                                                onMouseEnter = {() => { setContent(`${geo.properties.name}`) }}
                                                onMouseLeave = {() => { setContent('') }}
                                    />
                                )
                            })}
                            {geographies.map(geo => {
                                const centroid = geoCentroid(geo);
                                const cur = allStates.find(s => s.val === geo.id);
                                return (
                                        <g key={geo.rsmKey + "-name"} >
                                            {cur &&
                                                centroid[0] > -160 &&
                                                centroid[0] < -67 &&
                                                (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                                        <Marker coordinates={centroid}>
                                                            <text y="2" fontSize={14} textAnchor="middle">
                                                                {cur.id}
                                                            </text>
                                                        </Marker>
                                                ) : (
                                                <Annotation
                                                    subject={centroid}
                                                    dx={offsets[cur.id][0]}
                                                    dy={offsets[cur.id][1]}
                                                >
                                                    {cur.url !== "" ? (
                                                        <Link key={geo.rsmKey} href="/blog/post/[slug]"  as={`/blog/post/${cur.url}`} >
                                                        <a className="cursor-pointer">
                                                            <text x={4} fontSize={14} alignmentBaseline="middle">
                                                                {cur.id}
                                                            </text>
                                                        </a>
                                                    </Link>
                                                    ) : (
                                                        <text x={4} fontSize={14} alignmentBaseline="middle">
                                                                {cur.id}
                                                        </text>
                                                    )}
                                                    
                                                </Annotation>
                                            ))}
                                        </g>
                                );
                            })}
                        </>
                        )}
                    </Geographies>
                </ComposableMap>
                {isMounted && <ReactTooltip>{content}</ReactTooltip>}
            </>  
    )
}

export default memo(UsMap)