class KeyValuePairs<T, U> {
    private key: T;
    private value: U;

    setKeyValue(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    display() {
        console.log(`Key = ${this.key}, Value = ${this.value}`);
    }

}

const keyValue = new KeyValuePairs<string, number>();
keyValue.setKeyValue('Joe', 21);
keyValue.display();