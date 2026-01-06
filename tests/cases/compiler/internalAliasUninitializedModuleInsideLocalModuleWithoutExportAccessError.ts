//@module: amd
export module a {
    export module b {
        export interface I {
            foo();
        }
    }
}

export module c {
    import b = a.b;
    export declare var x: b.I;
    x.foo();
}


export var z: c.b.I;