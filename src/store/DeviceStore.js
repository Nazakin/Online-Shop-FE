import { makeAutoObservable, runInAction } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this);
    }

    setTypes(types) {
        runInAction(() => {
            this._types = types;
        });
    }

    setBrands(brands) {
        runInAction(() => {
            this._brands = brands;
        });
    }

    setDevices(devices) {
        runInAction(() => {
            this._devices = devices;
        });
    }

    setSelectedType(type) {
        runInAction(() => {
            this.setPage(1)
            this._selectedType = type;
        });
    }

    setSelectedBrand(brand) {
        runInAction(() => {
            this.setPage(1)
            this._selectedBrand = brand;
        });
    }
    setPage(page) {
    runInAction(() => {
        this._page = page;
        });
    }
    setTotalCount(count) {
    runInAction(() => {
        this._totalCount = count;
        });
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
    get totalCount() {
        return this._totalCount;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}
