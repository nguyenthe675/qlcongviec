import React from 'react';
import $ from 'jquery';
const apiUrl = 'http://qlts.vass.gov.vn/QLTS_API/API/';
//const apiLocalUrl = 'http://localhost:4001/API/API/';
const donViUrl = "DonVi/GetAll";
const bpsdUrl = "DMDoiTuongSuDung/GetAll";
class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            donviid: '',
            bpsdid: '',
            keysearch: '',
            donvis: [],
            bpsds: []

        }
    }

    componentWillMount() {
        if(this.props.token !== '' && this.props.token !== undefined)
        {
            this.getAllDonVi();
            this.getAllBoPhan();
        }
    }
    onKhoiTaoDuLieu = () => {
        if(this.props.token !== '' && this.props.token !== undefined)
        {
            this.getAllDonVi();
            this.getAllBoPhan();
        }
    }
    getAllDonVi = () => {
        $.ajax({
            type: 'get',
            url: apiUrl + donViUrl,
            contentType: "application/json",
            headers : {
                'Authorization': 'Bearer ' + this.props.token
            },
            dataType: 'json',
        }).done((response) => {
            this.setState({
                donvis: response
            });
        })

    }

    getAllBoPhan = () => {
        $.ajax({
            type: 'GET',
            data: {
                donViId : this.state.donviid
            },
            url: apiUrl + bpsdUrl,
            contentType: "application/json",
            dataType: 'json',
            headers : {
                'Authorization': 'Bearer ' + this.props.token
            },
            crossDomain: true,
        }).done((response) => {
            this.setState({
                bpsds: response
            });
        })
 
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    initData = (event) => {
        var target = event.target;
        
        var value = target.value;
        if(value !== '' && value !== undefined)
        {
            this.getAllDonVi();
            this.getAllBoPhan();
        }
    }

    onResetForm = () => {
        this.setState({
            donviid: '',
            bpsdid: '',
            keysearch: ''
        });
        this.props.onSearch();
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.donviid, this.state.bpsdid, this.state.keysearch);
    }

    render() {
        let { donvis } = this.state;
        let donViElement = donvis.map((donvi,index)=>{
            return <option key={donvi.id} value={donvi.id}>{donvi.text}</option>
        });
        let { bpsds } = this.state;
        let bpsdElement = bpsds.map((bpsd,index)=>{
            return <option key={bpsd.Id} value={bpsd.Id}>{bpsd.tenDoiTuongSuDung}</option>
        });
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2  col-form-label form-control-label">Token key</label>
                    <div className="col-sm-10 ">
                        <textarea className="form-control" rows="3" disabled
                            name="token"
                            value={this.props.token}
                            onChange={this.initData}
                        ></textarea>
                    </div>
                </div>
                
                <div className="form-group row">
                    <div className="col-sm-10 ">
                        <button type="button" className="btn btn-success" onClick={this.onKhoiTaoDuLieu}> <i className="icofont icofont-electron"></i> Khởi tạo dữ liệu đơn vị, bpsd</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2  col-form-label form-control-label">Đơn vị</label>
                    <div className="col-sm-10 ">
                        <select className="form-control"
                            name="donviid"
                            value={this.state.donviid}
                            onChange={this.onChange}
                        >
                        <option>Chọn đơn vị..</option>
                        {donViElement}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2  col-form-label form-control-label">Bộ phận sử dụng</label>
                    <div className="col-sm-10 ">
                        <select className="form-control"
                            name="bpsdid"
                            value={this.state.bpsdid}
                            onChange={this.onChange}
                        >
                            <option>Chọn bộ phận..</option>
                            {bpsdElement}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2  col-form-label form-control-label">Mã/tên tài sản</label>
                    <div className="col-sm-10 ">
                        <input className="form-control" type="text"
                            name="keysearch"
                            value={this.state.keysearch}
                            onChange={this.onChange}
                        />
                    </div>
                </div>

                

                <div className="form-group row">
                    <div className="col-sm-10 ">
                        <button type="submit" className="btn btn-warning"><i className="icofont icofont-search m-r-5"></i> Tìm kiếm</button> &nbsp;
                        <button type="button" className="btn btn-default" onClick={this.onResetForm}><i className="icofont icofont-refresh m-r-5"></i> Làm mới</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;