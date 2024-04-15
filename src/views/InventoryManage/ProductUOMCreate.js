import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import axios from 'axios'
// import CIcon from '@coreui/icons-react'
// import { cilFilter, cilPlus, cilSave, cilSortDescending } from '@coreui/icons'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CButton,
  // CFormSelect,
} from '@coreui/react'
import { NODEAPIURL, headerAPI } from '../../config'

const AddWorkerDepartmentForm = ({ ForDataID, setShowAddData, FilterDataList }) => {
  const [AjaxMsg, setAjaxMsg] = useState('')
  const [AjaxMsgStyle, setAjaxMsgStyle] = useState({ color: '#cc0000', padding: '5px' })
  const [AddData, setAddData] = useState({
    unit_id: ForDataID === 'new' ? 0 : ForDataID,
    title: '',
  })

  const HandleForm = (name, value) => {
    setAddData({ ...AddData, [name]: value })
  }

  const SubmitWorkersData = async (e) => {
    e.preventDefault()
    setAjaxMsgStyle({ color: '#cc0000', padding: '5px' })
    try {
      const res = await fetch(`${NODEAPIURL}/admin/product/addPrdUOMData`, {
        method: 'POST',
        headers: headerAPI({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(AddData),
      })
      const resJson = await res.json()
      console.log(resJson)
      if (res.status === 200) {
        if (resJson.status === 1) {
          setAjaxMsgStyle({ color: 'green', padding: '5px' })
          setTimeout(() => {
            FilterDataList()
            setShowAddData(false)
          }, 786)
        }
        setAjaxMsg(resJson.message)
      } else {
        setAjaxMsg(resJson.message)
      }
    } catch (err) {
      setAjaxMsg(err)
    }
  }

  const FetchDetails = async (unit_id) => {
    try {
      const res = await fetch(`${NODEAPIURL}/admin/product/getPrdUnitsData`, {
        method: 'POST',
        headers: headerAPI({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          unit_id,
        }),
      })
      const resJson = await res.json()
      console.log(resJson)
      if (res.status === 200) {
        if (resJson.data && resJson.data.length > 0) {
          setAddData(resJson.data[0])
        }
      } else {
        console.log(resJson.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (ForDataID !== 'new') {
      FetchDetails(ForDataID)
    }
  }, [ForDataID])

  return (
    <CRow>
      <CCol xs={12}>
        <h3 className="mb-4">{ForDataID !== 'new' ? `Update UOM: ${AddData.title}` : 'Add UOM'}</h3>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm
              className="hello"
              autoComplete="off"
              autofill="off"
              onSubmit={(e) => {
                SubmitWorkersData(e)
              }}
            >
              <CRow>
                <CCol md={12}>
                  <div className="p-1">
                    <label>Title</label>
                    <CFormInput
                      type="text"
                      required
                      name="title"
                      value={AddData.title}
                      onChange={(e) => {
                        HandleForm(e.target.name, e.target.value)
                      }}
                      placeholder="Enter Title"
                    />
                  </div>
                </CCol>
              </CRow>

              <div className="p-1 mt-2">
                <div className="hideifempty mb-2" style={AjaxMsgStyle}>
                  {AjaxMsg}
                </div>
                <CButton
                  type="submit"
                  color="primary"
                  className="mr-4"
                  style={{ marginRight: '20px' }}
                >
                  Save
                </CButton>
                <CButton
                  type="button"
                  color="light"
                  onClick={() => {
                    setShowAddData(false)
                  }}
                >
                  Cancel
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

AddWorkerDepartmentForm.propTypes = {
  ForDataID: PropTypes.any,
  setShowAddData: PropTypes.any,
  FilterDataList: PropTypes.any,
}

export default AddWorkerDepartmentForm
