export function Logo() {
    return (
        <div className="logo">
            {/* הלוגו המרכזי */}
            <div className="logo-name-container">
                <p className="logo-first">Chiara</p>
                <p className="logo-last">Böll</p>
            </div>

            {/* טקסט מסתובב מסביב */}
            <svg className="logo-circle" viewBox="0 0 200 200">
                <defs>
                    <path
                        id="circlePath"
                        d="M 100,100
         m -60,0
         a 60,60 0 1,1 120,0
         a 60,60 0 1,1 -120,0"
                    />
                </defs>
                <text className="logo-circle-text">
                    <textPath href="#circlePath">
                        • Content Creator &amp; Model • Content Creator &amp; Model •
                    </textPath>
                </text>
            </svg>
        </div>
    );
}