import moment from 'moment';
import uuidv4 from 'uuid/v4';

class ReflectionModel {
  /**
                                 * @param { object } data
                                 */
  constructor() {
    this.reflections = [];
  }

  /**
                                  * @returns { object } reflection object
                                  */

  create(data) {
    const newReflection = {
      id: uuidv4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdAt: moment.now(),
      modifiedDate: moment.now(),
    };
    this.reflections.push(newReflection);
    return newReflection;
  }

  /**
                            * @param {uuid} id
                            * @returns {object} reflection object
                             */

  findOne(id) {
    return this.reflections.find((reflect) => reflect.id === id);
  }

  /**
                * @returns {object} returns all reflections
                  */

  findAll() {
    return this.reflections;
  }

  /**
         *
         * @param {uuid} id
         * @param {object} data
         */

  update(id, data) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections[index].success = data.success || reflection.success;
    this.reflections[index].lowPoint = data.lowPoint || reflection.lowPoint;
    this.reflections[index].takeAway = data.takeAway || reflection.takeAway;
    this.reflections[index].modifiedDate = moment.now();
    return this.reflections[index];
  }

  /**
       *
       * @param {uuid} id
       */
  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }
}
export default new ReflectionModel();
