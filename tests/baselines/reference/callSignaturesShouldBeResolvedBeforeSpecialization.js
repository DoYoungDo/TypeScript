//// [tests/cases/compiler/callSignaturesShouldBeResolvedBeforeSpecialization.ts] ////

//// [callSignaturesShouldBeResolvedBeforeSpecialization.ts]
interface I1<T> {
    (value: T): void;
    field1: I1<boolean>;
}

function foo() {
    declare var test: I1<string>;
    test("expects boolean instead of string"); // should not error - "test" should not expect a boolean
    test(true); // should error - string expected
}

//// [callSignaturesShouldBeResolvedBeforeSpecialization.js]
function foo() {
    test("expects boolean instead of string"); // should not error - "test" should not expect a boolean
    test(true); // should error - string expected
}
