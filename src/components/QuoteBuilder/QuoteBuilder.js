import React from 'react'
import { Table as BootstrapTable, Grid, Col } from 'react-bootstrap'
import Button from '../Button/Button'

const QuoteBuilder = (props) => {
  const {
    items,
    fetchingItems,
    toggleEditMode,
    showModal,
    editMode,
    fetchQuoteItems,
    removeItem
  } = props

  let loadingQuoteItems,
    total = 0,
    vat = 0
  if (fetchingItems) {
    loadingQuoteItems = (<span><i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' /></span>)
  }
  const inlineStyle = {
    display: 'inline-block'
  }
  return (
    <Grid>
        { loadingQuoteItems }
        <BootstrapTable responsive bordered>
          <thead>
            <tr>
              <th>
              { editMode ?
                'Update quote' : 'Quote details'
              }
                </th>
              <th>
              { editMode ?
                <Button secondary onClick={toggleEditMode} label='Cancel quote' />
                :
                <Button primary onClick={toggleEditMode} label='Amend quote' />
              }

              </th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(items).map((item, value) => {
                total += parseInt(item.price)
                vat = total * 0.2
                return (
                  <tr key={value}>
                    <td>{item.description}</td>
                    <td>£{item.price}
                      { editMode &&
                        <div style={inlineStyle}>
                          <Button primary onClick={() => showModal(item.itemId)} label='Edit' />
                          <Button secondary onClick={() => removeItem(item.itemId)} label='Remove' />
                        </div>
                      }
                    </td>
                  </tr>
                )
              })
            }
            { editMode &&
              <tr>
                <td colSpan={2}>
                  <Button primary onClick={() => showModal()} label='+ Add quote item' />
                </td>
              </tr>
            }
            <tr>
              <td>Total quote (excl. VAT)</td>
              <td>{ total }</td>
            </tr>
            <tr>
              <td>VAT</td>
              <td>{ vat }</td>
            </tr>
            <tr>
              <td>Total quote (incl. VAT)</td>
              <td>{ total + vat }</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <span>Service fee is 10% of the total quote (excl. VAT).</span>
                <span>A 20% deposit will be requested from the customer</span>
              </td>
            </tr>
            { editMode &&
              <tr>
                <td>
                  <span onClick={fetchQuoteItems}>Discard Changes</span>
                </td>
                <td>
                  <Button primary onClick={toggleEditMode} label='Update' />
                </td>
              </tr>
            }
          </tbody>
        </BootstrapTable>
    </Grid>
  )
}

QuoteBuilder.propTypes = {
  items: React.PropTypes.object,
  fetchingItems: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  toggleEditMode: React.PropTypes.func
}

export default QuoteBuilder
