exports.RoleBeforeInsertTrigger = `CREATE TRIGGER hotel_before_insert BEFORE INSERT ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END`;

exports.RoleBeforeUpdateTrigger = `CREATE TRIGGER hotel_before_update BEFORE UPDATE ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END`;
